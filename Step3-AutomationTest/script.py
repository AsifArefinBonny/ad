import time
import random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select

# Initialize WebDriver
driver = webdriver.Chrome()

# Iterate 20 times
for iteration_count in range(1, 21):
    # Load the URL
    driver.get("https://staging.a-d.com.au/new-apartments-developments/nsw/castle-hill-2154/grand-reve")

    # Function to generate a random name
    def generate_random_name():
        first_names = ['John', 'Jane', 'Mike', 'Emma', 'Tom', 'Sophia', 'Bob', 'Olivia']
        last_names = ['Smith', 'Doe', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller', 'Davis']
        return f"{random.choice(first_names)} {random.choice(last_names)}"

    # Function to generate a random Australian phone number
    def generate_random_australian_phone_number():
        return '4' + ''.join(random.choices('0123456789', k=8))

    # Function to generate a random Australian postcode
    def generate_random_australian_postcode():
        postcodes = [
            '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
            '2500', '2501', '2502', '2503', '2504', '2505', '2506', '2507', '2508', '2509',
            '3000', '3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009',
            '4000', '4001', '4002', '4003', '4004', '4005', '4006', '4007', '4008', '4009',
            '6000', '6001', '6002', '6003', '6004', '6005', '6006', '6007', '6008', '6009',
            '7000', '7001', '7002', '7003', '7004', '7005', '7006', '7007', '7008', '7009',
            '8000', '8001', '8002', '8003', '8004', '8005', '8006', '8007', '8008', '8009'
        ]
        return random.choice(postcodes)

    # Fill and submit the form
    form_submitted = False

    while not form_submitted:
        try:
            enquire_button = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, 'button.fullWidth.fullHeight')))
            enquire_button.click()
            
            random_name = generate_random_name()
            name_input = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'input[formcontrolname="name"]')))
            name_input.send_keys(random_name)

            email_input = driver.find_element(By.CSS_SELECTOR, 'input[formcontrolname="email"]')
            email_input.send_keys(random_name.split(' ')[0].lower() + '@test.com')

            phone_input = driver.find_element(By.ID, 'phone')
            phone_input.send_keys(generate_random_australian_phone_number())

            postcode_input = driver.find_element(By.CSS_SELECTOR, 'input[formcontrolname="postCode"]')
            postcode_input.send_keys(generate_random_australian_postcode())

            select_fields = driver.find_elements(By.CSS_SELECTOR, 'select[formcontrolname]')
            for select_field in select_fields:
                options = select_field.find_elements(By.TAG_NAME, 'option')
                random_index = random.randint(1, len(options) - 1)
                Select(select_field).select_by_index(random_index)

            checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[formcontrolname][type="checkbox"]')
            for checkbox in checkboxes:
                checkbox.click()

            add_message_label = driver.find_element(By.CSS_SELECTOR, 'label.add-message-toggle')
            add_message_label.click()

            message_textarea = driver.find_element(By.CSS_SELECTOR, 'textarea[formcontrolname="message"]')
            message_textarea.send_keys(f"{random_name.split(' ')[0]} functionality {iteration_count}")

            submit_button = driver.find_element(By.CSS_SELECTOR, 'button.enquiry-submit')
            submit_button.click()
            form_submitted = True

            close_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'img[alt="Close"]')))
            close_button.click()

            form_submitted = False
        except Exception as e:
            print("An error occurred:", e)
            break

# Close the WebDriver session
driver.quit()
