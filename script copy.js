const enquireButton = document.querySelector('button.fullWidth.fullHeight');
if (enquireButton) {
    enquireButton.click();
    setTimeout(() => {
        const randomName = generateRandomName();
        const inputField = document.querySelector('input[formcontrolname="name"]');
        if (inputField) inputField.value = randomName;
        setTimeout(() => {
            const emailField = document.querySelector('input[formcontrolname="email"]');
            if (emailField) emailField.value = randomName + '@test.com';
            setTimeout(() => {
                const phoneField = document.querySelector('#phone');
                if (phoneField) phoneField.value = generateRandomAustralianPhoneNumber();
                setTimeout(() => {
                    const postcodeField = document.querySelector('input[formcontrolname="postCode"]');
                    if (postcodeField) postcodeField.value = generateRandomAustralianPostcode();
                    setTimeout(() => {
                        const selectFields = document.querySelectorAll('select[formcontrolname]');
                        selectFields.forEach((selectField) => {
                            selectField.selectedIndex = 1; // Select the second option (index 1 is the first visible option)
                        });
                        setTimeout(() => {
                            const checkboxes = document.querySelectorAll('input[formcontrolname][type="checkbox"]');
                            checkboxes.forEach((checkbox) => {
                                checkbox.checked = true;
                            });
                            setTimeout(() => {
                                const addMessageLabel = document.querySelector('label.add-message-toggle');
                                if (addMessageLabel) addMessageLabel.click();
                                setTimeout(() => {
                                    const messageTextarea = document.querySelector('textarea[formcontrolname="message"]');
                                    if (messageTextarea) messageTextarea.value = 'Test Message';
                                    setTimeout(() => {
                                        const submitButton = document.querySelector('button.enquiry-submit');
                                        if (submitButton) submitButton.click();
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 2000);
}

function generateRandomName() {
    const firstNames = ['John', 'Jane', 'Mike', 'Emma', 'Tom', 'Sophia', 'Bob', 'Olivia'];
    const lastNames = ['Smith', 'Doe', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller', 'Davis'];
    const randomFirstIndex = Math.floor(Math.random() * firstNames.length);
    const randomLastIndex = Math.floor(Math.random() * lastNames.length);
    return firstNames[randomFirstIndex] + ' ' + lastNames[randomLastIndex];
}

function generateRandomAustralianPhoneNumber() {
    const prefix = '+61';
    const areaCodes = ['2', '3', '4', '7', '8'];
    const randomAreaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
    const randomNumber = Math.floor(Math.random() * 900000000) + 10000000;
    return prefix + ' ' + randomAreaCode + ' ' + randomNumber;
}

function generateRandomAustralianPostcode() {
    const postcodes = [
        '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2500', '2501', '2502', '2503', '2504', '2505', '2506', '2507', '2508', '2509',
        '3000', '3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009',
        '4000', '4001', '4002', '4003', '4004', '4005', '4006', '4007', '4008', '4009',
        '6000', '6001', '6002', '6003', '6004', '6005', '6006', '6007', '6008', '6009',
        '7000', '7001', '7002', '7003', '7004', '7005', '7006', '7007', '7008', '7009',
        '8000', '8001', '8002', '8003', '8004', '8005', '8006', '8007', '8008', '8009'
    ];
    return postcodes[Math.floor(Math.random() * postcodes.length)];
}