## Webroot Release Notes

* ##### vm.m.p - 2022-MM-DD

* ##### v5.5.0 - 2022-08-16

  * yangcatalog-ui
    * Check if regex is valid if using regex search
    * Update to headers after yanglint v2.0.231 update [deployment #146](https://github.com/YangCatalog/deployment/issues/146)
    * Bugfix: yangvalidator API docs component displaying

* ##### v5.4.0 - 2022-07-08

  * yangcatalog-ui
    * IETF navigation tab added to YANG Modules Stats [deployment #139](https://github.com/YangCatalog/deployment/issues/139)
    * ETSI navigation tab added to YANG Modules Stats
    * Bugfix: Display warning in Impact analysis if module does not exist

* ##### v5.3.0 - 2022-06-06

  * yangcatalog-ui
    * Update to headers after yanglint v2.0.194 update [deployment #127](https://github.com/YangCatalog/deployment/issues/127)
    * Query params for navigation tabs
    * Bugfix: Displaying data in AllYANGPageMain table fixed
    * Bugfix: Results table slow rendering fixed
    * Notification to user if there was timeout during search
    * Notification to user if there are many search results
    * Redirect to home page if page does not exist
    * Bugfix: Title rendering fixed - now works correctly with Matomo

* ##### v5.2.0 - 2022-05-03

  * yangcatalog-ui
    * Update to headers after pyang 2.5.2 update [deployment #124](https://github.com/YangCatalog/deployment/issues/124)
    * Footer added on some pages where missing
    * Angular modules lazy-loading introduced
    * Bugfix: Fixed display of YANG Trees if revision is not available
    * Set page titles for individual pages
    * Improved images and fonts preloading

* ##### v5.1.0 - 2022-03-28

  * Various updates to the Dockerfile - speed up the building process
  * yangcatalog-ui
    * Bugfix: Formatting of newlines at private-page tables
    * Link headers added for certain resources to enable preloading
    * Size of the backgroud image decreased
    * Matomo tracker added to the YANG Catalog UI
    * Validators versions updated in private component
    * Error messages contains more user-friendly code in the Modules details tab
    * Bugfix: Deviations list display fixed
    * Module detail properties tooltips moved into modal window
    * Unique URI for nodes/leaves of individuals module parts

* ##### v5.0.0 - 2022-02-02

  * YANG Validator Swagger documentation added to the Docker build steps
  * Postman collection updated with YANG Validator requests
  * yangcatalog-ui
    * Improvements for displaying errors in the YANG Validator form
    * YANG Catalog API overview moved into separate component
    * Query parameters added for YANG Validator
    * Updates to headers after pyang 2.5.2 update [deployment #113](https://github.com/YangCatalog/deployment/issues/113)
    * Various improvements to the registration form
    * reCAPTCHA validation added to the registration form
    * Query tab added to the navigation menu
    * Bugfix: Display output of validation correctly

* ##### v4.3.0 - 2021-12-03

  * yangcatalog-ui
    * Node base image version updated to version 14
    * Bugfix: Loader spinning even if nothing is being fetch from backend
  * admin-ui
    * Use npm clean install while building image
    * Rename mysql-management to users-management

* ##### v4.2.1 - 2021-10-06

  * yangcatalog-ui
    * Bugfix: YANG search form fixes
    * Display validators versions
    * Bugfix: Problem with module name validator/autocomplete fixed
    * Update headers after ConfD 7.6 release [deployment #99](https://github.com/YangCatalog/deployment/issues/99) 
    * Document title updated
    * Bugfix: Redundant scroll bars removed
    * Bugfix: Private-page statistics tables - position fixed
    * Motivation field added to registration form
  * admin-ui
    * Display registration date in the users table

* ##### v4.2.0 - 2021-09-09

  * No changes - released with other [deployment submodules](https://github.com/YangCatalog/deployment)

* ##### v4.1.0 - 2021-08-10

  * yangcatalog-ui
    * Unnecessary static files removed
    * Bugfix: Hrefs fixed in contribute.html page
    * Bugfix: Searched strings from inputs trimed before sending request
    * Display impact analysis for multiple modules
    * "match" status aligned in YANG Regex Validator
    * Bugfix: Not display leaf icon if module has no tree
    * Bugfix: Problem with http links and mailto hrefs
    * Basic help displayed for impact analysis
    * Bugfix: Displaying of submodules in modules details

* ##### v4.0.0 - 2021-07-09

  * php7.0 removed from frontend build process
  * yang2.amsl.com mailname replaced by yangcatalog.org [deployment #73](https://github.com/YangCatalog/deployment/issues/73)
  * yangcatalog-ui
    * Initial submitted version

* ##### v3.2.1 - 2021-05-04

  * No changes - released with other [deployment submodules](https://github.com/YangCatalog/deployment)

* ##### v3.2.0 - 2021-04-15

  * admin-ui
    * Logs table modified - added filename column

* ##### v3.1.0 - 2021-03-18

  * Added missing static image
  * admin-ui
    * Display additional information in service healthcheck card

* ##### v3.0.1 - 2021-02-26

  * rsyslog and systemd added to Docker image build [deployment #48](https://github.com/YangCatalog/deployment/issues/48)

* ##### v3.0.0 - 2021-02-10

  * Removed not needed apps from image build
  * admin-ui
    * Display additional messages in cronjob healthcheck
    * Files and folders modification date info added
    * Adding manual for yc_operators and yc_admins
    * README file updated with information about individual tabs
    * Logout functionality adjustments
    * Login component and logic removed
    * Cronjobs status added to healthcheck tab
    * Implementing OAuthService
    * Added functionality that allows to edit user records
    * Help and tooltips added to Run tab
    * Pie chart displaying disk usage
    * Labels changed through app

* ##### v2.0.0 - 2020-08-14

  * Minor changes to Dockerfile
  * admin-ui
    * Multiple log files filtering adjustments
    * More user-friendly displaying of files/folders permissions
    * Pretty print content of JSON files
    * Updates in redirect after successful login
    * Healthcheck dashboard created
    * Edited http API calls for correct communication with backend
    * Files tab - progressive render
    * Run tab - list runnng jobs (by job ID) + prevent re-rendering
    * Files tab - display file/folder metadata (size, permission ...)
    * Run tab - check job by ID
    * Run tab - use browser local storage to handle job ID
    * Run tab - add validators for form in this tab
    * Run tab - get data from BE and generate form
    * API error handling

* ##### v1.1.0 - 2020-07-16

  * Initial submitted version
