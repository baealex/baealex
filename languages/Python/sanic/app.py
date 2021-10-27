from sanic import Sanic, Blueprint
from sanic.response import json
from databases import Database
from db import orm

app = Sanic("hello_example")
bp = Blueprint('my_blueprint')
database = Database('sqlite:///db.sqlite3')

@bp.listener('before_server_start')
async def setup_connection(app, loop):
    await database.connect()

@bp.listener('after_server_stop')
async def close_connection(app, loop):
    await database.close()

@app.route("/")
async def test(request):
    posts = await orm.get_all_posts(database)
    return json(posts)

@app.route("/<pk>")
async def test(request, pk):
    post = await orm.get_post(database, pk)
    return json(post)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)