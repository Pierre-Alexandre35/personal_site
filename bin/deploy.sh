: '
Bash script to upload (add, delete, modify) files on a Google Cloud Storage (GCS) bucket pierre-alexandre.io
'

# select the correct GCP project where my pierre-alexandre.io bucket is present
gcloud config set project personal-website-300610

# set website config
gsutil web set -m index.html -e error/404.html gs://pierre-alexandre.io

# add user permissions
gsutil iam ch allUsers:legacyObjectReader gs://pierre-alexandre.io

# copy the website files!
gsutil -m rsync -d -r public_html gs://pierre-alexandre.io