

# set website config
gsutil web set -m index.html -e 404.html gs://pierre-alexandre.io

# add user permissions
gsutil iam ch allUsers:legacyObjectReader gs://pierre-alexandre.io

# copy the website files!
gsutil -m rsync -d -r public_html gs://pierre-alexandre.io

