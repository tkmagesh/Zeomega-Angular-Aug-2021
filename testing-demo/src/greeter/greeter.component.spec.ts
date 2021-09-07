import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GreeterComponent } from "./greeter.component";


fdescribe('Greeter Component', () => {
    let fixture: ComponentFixture<GreeterComponent>;
    let greeterComponent : GreeterComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GreeterComponent],
        });
        fixture = TestBed.createComponent(GreeterComponent);
        greeterComponent = fixture.componentInstance;

    });

    it('should be to create an instance', () => {
        expect(greeterComponent).toBeTruthy();
    });

    it('should display a greet message when greeted', () => {
        const nativeElement = fixture.nativeElement;
        const userNameTextBox = nativeElement.querySelector('#txtUserName')
        userNameTextBox.value = 'Test User';

        const btnGreet = nativeElement.querySelector('input[value="Greet"]');
        btnGreet.dispatchEvent(new Event('click'));

        fixture.detectChanges();
        const greetMsgElement = nativeElement.querySelector('div');
        expect(greetMsgElement.textContent).toContain('Hello Test User');
    })
})