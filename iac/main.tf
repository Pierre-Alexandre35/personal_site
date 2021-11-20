provider "google" {
  project = "personal-website-300610"
}

resource "google_service_account" "continuous_integration_sa" {
  account_id   = "continuous-integration-sa"
  display_name = "Service Account for the CI"
}


resource "google_project_iam_binding" "continuous_integration_sa" {
  project = "personal-website-300610"
  role    = "roles/storage.admin"
  members = [
    "serviceAccount:${google_service_account.continuous_integration_sa.email}"
  ]
}