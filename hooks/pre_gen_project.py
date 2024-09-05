import re
import sys


# Allow only lowercase and numbers
PROJECT_SLUG_REGEX = r"^[_a-z0-9][_a-z0-9]+$"

project_slug = "{{ cookiecutter.project_slug }}"

if not re.match(PROJECT_SLUG_REGEX, project_slug):
    print(
        f"Error: '{project_slug}' is not a valid project slug. Please stick to underscores, numbers, and lowercase letters."
    )
    sys.exit(1)
