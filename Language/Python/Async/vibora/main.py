import databases
import orm
import sqlalchemy
import asyncio
import re

from vibora import Vibora, Request
from vibora.responses import Response, JsonResponse

database = databases.Database("sqlite:///db.sqlite")
metadata = sqlalchemy.MetaData()

class Note(orm.Model):
    __tablename__ = "notes"
    __database__ = database
    __metadata__ = metadata

    id = orm.Integer(primary_key=True)
    text = orm.String(max_length=100)
    completed = orm.Boolean(default=False)

app = Vibora()

@app.route('/create_database')
async def note_create(request: Request):
    engine = sqlalchemy.create_engine(str(database.url))
    metadata.create_all(engine)

@app.route('/notes')
async def note(request: Request):
    notes = await Note.objects.all()
    return JsonResponse(list(map(lambda x: {x.id: x.text}, notes)))

@app.route('/create_notes')
async def create():
    await Note.objects.create(text="Buy the groceries.", completed=False)
    await Note.objects.create(text="Call Mum.", completed=True)
    await Note.objects.create(text="Send invoices.", completed=True)
    return JsonResponse({'state': 'done'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)