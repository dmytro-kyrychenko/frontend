import { Component, OnInit, ViewChild } from '@angular/core';
import { RedisService } from '../../redis.service';
import { finalize } from 'rxjs/operators';
import { TextEditorComponent } from 'src/app/components/text-editor/text-editor.component';

@Component({
  selector: 'app-redis',
  templateUrl: './redis.component.html',
  styleUrls: ['./redis.component.scss']
})
export class RedisComponent implements OnInit {
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
