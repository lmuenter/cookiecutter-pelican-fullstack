from pathlib import Path

AUTHOR = "{{ cookiecutter.author_name }}"
SITENAME = "{{ cookiecutter.project_name }}"
SITEURL = "{{ cookiecutter.domain_name }}"

BASE_DIR = Path(__file__).resolve(strict=True).parent.parent
PELICAN_DIR = BASE_DIR / "{{ cookiecutter.project_slug }}"

THEME = BASE_DIR / "theme"
PATH = PELICAN_DIR / "content"

TIMEZONE = "{{ cookiecutter.timezone }}"

DEFAULT_LANG = "{{ cookiecutter.timezone }}"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
