Fork/Clone

```sh
$ git clone https://github.com/CaptainVee/mondico.git
```

1. Cd into the folder
   ```sh
   $ cd mondico
   ```
1. Create a virtual environment:

   ```sh
   $ python3 -m venv venv &&
   ```

1. activate the virtual environment:

```sh
For Linux/macOS:
source .venv/bin/activate

For Windows:
.venv\scripts\activate
```

1. Install the dependencies:

   ```sh
   (venv)$ pip install -r requirements.txt
   ```

1. Apply the migrations and run the Django development server:

   ```sh
   (venv)$ python manage.py makemigrations
   (venv)$ python manage.py migrate
   (venv)$ python manage.py runserver
   ```

1. Test at [http://localhost:8000/](http://localhost:8000/)
