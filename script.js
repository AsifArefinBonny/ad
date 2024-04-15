const enquireButton = document.querySelector('button.fullWidth.fullHeight');
if (enquireButton) {
    enquireButton.click();

    setTimeout(() => {
        const inputField = document.querySelector('input[formcontrolname="name"]');
        if (inputField) inputField.value = 'Test Asif';

        const emailField = document.querySelector('input[formcontrolname="email"]');
        if (emailField) emailField.value = 'test@test.com';

        const phoneField = document.querySelector('#phone');
        if (phoneField) phoneField.value = '432432234';

        const postcodeField = document.querySelector('input[formcontrolname="postCode"]');
        if (postcodeField) postcodeField.value = '1234';

        const selectField = document.querySelector('select[formcontrolname="audience"]');
        if (selectField) {
            const options = Array.from(selectField.options);
            const randomIndex = Math.floor(Math.random() * options.length);
            selectField.selectedIndex = randomIndex;
        }

        const priceRangeField = document.querySelector('select[formcontrolname="priceRange"]');
        if (priceRangeField) {
            const options = Array.from(priceRangeField.options);
            const randomIndex = Math.floor(Math.random() * options.length);
            priceRangeField.selectedIndex = randomIndex;
        }

        const buyingDurationField = document.querySelector('select[formcontrolname="lookingToBuy"]');
        if (buyingDurationField) {
            const options = Array.from(buyingDurationField.options);
            const randomIndex = Math.floor(Math.random() * options.length);
            buyingDurationField.selectedIndex = randomIndex;
        }

        const contactMethodField = document.querySelector('select[formcontrolname="contactMethod"]');
        if (contactMethodField) {
            const options = Array.from(contactMethodField.options);
            const randomIndex = Math.floor(Math.random() * options.length);
            contactMethodField.selectedIndex = randomIndex;
        }

        const preApprovalField = document.querySelector('select[formcontrolname="selectPreApproval"]');
        if (preApprovalField) {
            const options = Array.from(preApprovalField.options);
            const randomIndex = Math.floor(Math.random() * options.length);
            preApprovalField.selectedIndex = randomIndex;
        }

        const scheduleInspection = document.querySelector('input[formcontrolname="scheduleInspection"]');
        if (scheduleInspection) scheduleInspection.checked = true;

        const priceInformation = document.querySelector('input[formcontrolname="priceInformation"]');
        if (priceInformation) priceInformation.checked = true;

        const requestFloorPlans = document.querySelector('input[formcontrolname="requestFloorPlans"]');
        if (requestFloorPlans) requestFloorPlans.checked = true;

        const brochure = document.querySelector('input[formcontrolname="brochure"]');
        if (brochure) brochure.checked = true;

        const addMessageLabel = document.querySelector('label.add-message-toggle');
        if (addMessageLabel) addMessageLabel.click();

        const messageTextarea = document.querySelector('textarea[formcontrolname="message"]');
        if (messageTextarea) messageTextarea.value = 'Test Message';
    }, 2000); // 2000 milliseconds (2 seconds) delay after clicking the button
}