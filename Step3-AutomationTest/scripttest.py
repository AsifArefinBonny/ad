from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import os
import time

# Specify the local directory where the file should be downloaded
download_directory = "/"

# URL of the webpage containing the link to download the PDF file
url = "https://intellipaat.com/blog/tutorial/selenium-tutorial/selenium-cheat-sheet/"

# Set Chrome options to specify the download directory
chrome_options = Options()
chrome_options.add_argument("--headless")  # Optional: Run Chrome in headless mode
chrome_options.add_argument(f"--no-sandbox")  # Required for Linux
chrome_options.add_argument(f"--disable-dev-shm-usage")  # Required for Linux
chrome_options.add_experimental_option("prefs", {
    "download.default_directory": download_directory,
    "download.prompt_for_download": False,
    "download.directory_upgrade": True,
    "plugins.always_open_pdf_externally": True
})

# Initialize Chrome WebDriver with specified options
chrome_driver_path = "/chromedriver"
service = Service(chrome_driver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open the webpage
driver.get(url)

# Find the link to download the PDF file
pdf_link = driver.find_element_by_link_text("Download a Printable PDF of this Cheat Sheet")

# Get the href attribute of the <a> element
pdf_link_url = pdf_link.get_attribute("href")

# Click on the link to initiate the download
pdf_link.click()

# Wait for the file to download
time.sleep(5)  # Adjust the sleep time as needed

# Verify if the file has been downloaded successfully
file_name = "Selenium-Cheat-Sheet-2022.pdf"
file_path = os.path.join(download_directory, file_name)
if os.path.exists(file_path):
    print("PDF file downloaded successfully.")
    # You can also add further checks on the file if needed
else:
    print("PDF file download failed.")

# Close the WebDriver
driver.quit()
