import { TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { TranslateModule } from "@ngx-translate/core";
import { ElectronService } from "./core/services";

describe("AppComponent", () => {
  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [],
      providers: [ElectronService],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  it("should create the app", waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
