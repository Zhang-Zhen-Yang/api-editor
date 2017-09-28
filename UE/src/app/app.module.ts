import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { TestModuleMetadata } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BottomBarComponent } from './component/bottom-bar/bottom-bar.component';
import { CodeSpaceComponent } from './component/code-space/code-space.component';
import { LeftBarComponent } from './component/left-bar/left-bar.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ResizeLayoutComponent } from './component/resize-layout/resize-layout.component';
import { HostDirective } from './component/resize-layout/host.directive';
import { TestComponent } from './component/test/test.component';
import { DisplaySpaceComponent } from './component/display-space/display-space.component';
import { DisplayWiewHostDirective } from './component/resize-layout/display-wiew-host.directive';
import { ResourceManagerComponent } from './component/resource-manager/resource-manager.component';
import { WorkSpaceComponent } from './component/work-space/work-space.component';
import { ApiService } from './service/api.service';
import { TreeComponent } from './component/tree/tree.component';
import { TreeDirComponent } from './component/tree/tree-dir/tree-dir.component';
import { TreeFileComponent } from './component/tree/tree-file/tree-file.component'

@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    CodeSpaceComponent,
    LeftBarComponent,
    LayoutComponent,
    ResizeLayoutComponent,
    HostDirective,
    TestComponent,
    DisplaySpaceComponent,
    DisplayWiewHostDirective,
    ResourceManagerComponent,
    WorkSpaceComponent,
    TreeComponent,
    TreeDirComponent,
    TreeFileComponent
  ],
  entryComponents:[
    TestComponent,
    CodeSpaceComponent,
    DisplaySpaceComponent,
    ResourceManagerComponent,
    WorkSpaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
