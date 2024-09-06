project_slug = '{{ cookiecutter.project_slug }}'
env_content = f"PROJECT_SLUG={project_slug}"

with open('.env', 'w') as f:
    f.write(env_content)
