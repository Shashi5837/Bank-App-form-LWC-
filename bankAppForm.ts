import { createElement } from 'lwc';
import BankAppForm from 'c/bankAppForm';

describe('c-bank-app-form', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });


    it ('display first name', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='FirstName';
        document.body.appendChild(element);
        //const div =element.shadowRoot.querySelector('class.slds-text-title_bold first');
        //expect(div.textContent).not.toBe('Lightning Web Component');

        const inputEl=element.shadowRoot.querySelector('lightning-input[class="slds-text-title_bold first"]');
        inputEl.value='FirstName';

        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
        })
    })
    it ('display last name', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='LastName';
        document.body.appendChild(element);
        //const div =element.shadowRoot.querySelector('class.slds-text-title_bold first');
        //expect(div.textContent).not.toBe('Lightning Web Component');

        const inputEl=element.shadowRoot.querySelector('lightning-input[class="slds-text-title_bold last"]');
        inputEl.value='LastName';
    
        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
            //expect(div).not.toBe(null);
        })
    })


    it ('display cards', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='Debit Card';
        document.body.appendChild(element);
      
        const inputEl=element.shadowRoot.querySelector('lightning-checkbox-group[class="checkbox"]');
        inputEl.value='Debit Card';
        

        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
            //expect(div).not.toBe(null);
        })
        
    })

    it('displays Bank Account types', () => {
        // Create element
        const element = createElement('c-MyComponent', {
            is: BankAppForm
        });
        document.body.appendChild(element);
        // Verify displayed greeting
        return Promise.resolve().then(() => {
            // element.value = "new";
            const combobox = element.shadowRoot.querySelector('lightning-combobox[class="slds-text-title_bold third"]');
            combobox.value='Saving account';
            // Explicitly dispatch change event on combobox
            combobox.dispatchEvent(new CustomEvent("change", {
                    detail: {
                        value: "Saving account"
                    }
                }));
            return Promise.resolve().then(() => {
                expect(combobox.value).toBe('Saving account');
            });
        });
    });

    it ('display Address', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='Address';
        document.body.appendChild(element);
        //const div =element.shadowRoot.querySelector('class.slds-text-title_bold first');
        //expect(div.textContent).not.toBe('Lightning Web Component');

        const inputEl=element.shadowRoot.querySelector('lightning-input[class="slds-text-title_bold address"]');
        inputEl.value='Address';

        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
            //expect(div).not.toBe(null);
        })
    })

    it('displays state on selection', () => {
        // Create element
        const element = createElement('c-MyComponent', {
            is: BankAppForm
        });
        document.body.appendChild(element);
        // Verify displayed greeting
        return Promise.resolve().then(() => {
            // element.value = "new";
            const combobox = element.shadowRoot.querySelector('lightning-combobox[class="slds-text-title_bold state"]');
            combobox.value='Karnataka';
            // Explicitly dispatch change event on combobox
            combobox.dispatchEvent(new CustomEvent("change", {
                    detail: {
                        value: "Saving account"
                    }
                }));
            return Promise.resolve().then(() => {
                expect(combobox.value).toBe('Karnataka');
            });
        });
    });
   

    it('displays city on selection', () => {
        const element = createElement('c-MyComponent', {
            is: BankAppForm
        });
        document.body.appendChild(element);
        return Promise.resolve().then(() => {
            const combobox = element.shadowRoot.querySelector('lightning-combobox[class="slds-text-title_bold city"]');
            combobox.value='Hubli';
            combobox.dispatchEvent(new CustomEvent("change", {
                    
                }));
            return Promise.resolve().then(() => {
                expect(combobox.value).toBe('Hubli');
            });
        });
    });

    it ('display zip code', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='1234536';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('lightning-input[class="slds-text-title_bold zip"]');
        inputEl.value='1234536';
        
        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })

    it ('display mobile number', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='9110482242';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('lightning-input[class="slds-text-title_bold mobile"]');
        inputEl.value='9110482242';
        
        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })


    it ('display Alternate mobile number', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='9110482242';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('lightning-input[class="slds-text-title_bold AMobile"]');
        inputEl.value='9110482242';
        
        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })

    it ('display Email', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='ssa@gha.cma';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('lightning-input[class="slds-text-title_bold email"]');
        inputEl.value='ssa@gha.cma';
        
        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })


    it ('display Nominee details', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='yes';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('lightning-input[class="slds-text-title_bold nominee"]');
        inputEl.value='yes';
        
        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })

    it ('display submit button', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='submit';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('lightning-button[ class="button1"]');
        inputEl.value='submit';
        
        inputEl.dispatchEvent(new CustomEvent('click'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })

    it ('display reset button', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('lightning-button[ class="button"]');
        inputEl.value='';
        
        inputEl.dispatchEvent(new CustomEvent('click'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })

    it ('display gender', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='Male';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('Lightning-radio-group[class="radio-combo-inline gender"]');
        inputEl.value='Male';
        
        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })

    it ('display cheque book', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='no';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('Lightning-radio-group[class="cheque"]');
        inputEl.value='no';
        
        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })

    it ('display Account', ()=>{
        const element =createElement('c-bank-app-form',{
            is:BankAppForm
        });
        const EXPECTED='Self-account';
        document.body.appendChild(element);

        const inputEl=element.shadowRoot.querySelector('Lightning-radio-group[class="Accounts"]');
        inputEl.value='Self-account';
        
        inputEl.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
            expect(inputEl.value).toBe(`${EXPECTED}`);
         
        })
    })
    


})
