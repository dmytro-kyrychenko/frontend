import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedisService } from '../../redis.service';
import { finalize } from 'rxjs/operators';
import { TextEditorComponent } from 'src/app/components/text-editor/text-editor.component';

@Component({
  selector: 'app-redis',
  templateUrl: './redis.component.html',
  styleUrls: ['./redis.component.scss']
})
export class RedisComponent implements OnInit {
  redisForm: FormGroup;
  isTableLoading = false;
  isFormLoading = false;
  isLoading = true;
  redisText: string;
  error = false;

  @ViewChild('textEditor') textEditor: TextEditorComponent;

  constructor(
    private redisService: RedisService,
  ) { }

  ngOnInit(): void {
    this.fetchConfig();
  }

  onFormSubmit() {
    const formData = this.getFormData(this.redisForm);
    this.getRedisDocument(formData);
  }

  private getFormData(form: any) {
    const dirtyValues = {};

    Object.keys(form.controls).forEach(key => {
      const currentControl = form.controls[key];
      dirtyValues[key] = currentControl.value;
    });
    return dirtyValues;
  }

  private getRedisDocument(formData: any) {
    this.isTableLoading = true;
    this.redisForm.disable();
    this.redisService
      .getRedis(formData)
      .pipe(
        finalize(() => {
          this.isTableLoading = false;
          this.redisForm.enable();
        })
      )
      .subscribe(
        response => {
          const parsedOutput = this.parseResponse(response);
          this.setPaginatorValues(response.meta['lines-per-page'], response.meta.page, response.meta.pages);
          this.filteredLogsDataSource = new MatTableDataSource<any>(parsedOutput);
          this.filteredLogsDataSource.paginator = this.paginator;
        },
        err => {
          console.log('ERROR: ' + err);
        }
      );
  }

  fetchConfig() {
    this.redisService.fetchRedisDocument()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        response => {
          this.redisText = response.data;
        },
        err => {
          this.error = true;
          console.log(err);
        }
      );
  }

  saveChange(editedRedis: string) {
    this.textEditor.startLoading();
    this.redisService.saveRedisDocument(editedRedis)
      .pipe(finalize(() => {
        this.textEditor.stopLoading();
      }))
      .subscribe(
        response => {
          this.textEditor.disableConfigEdit();
          this.textEditor.showSuccess();
        },
        err => {
          this.textEditor.showError();
        }
      );
  }
}
