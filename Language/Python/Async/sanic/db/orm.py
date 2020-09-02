import re

def match(col_names, data):
    result = dict()
    for i in range(len(col_names)):
        result[col_names[i]] = data[i]
    return result

async def get_all_posts(database):
    query = """
        SELECT
            board_post.id,
            board_post.title,
            auth_user.username,
            board_post.text_html
        FROM
            board_post,
            auth_user
        WHERE
            board_post.author_id = auth_user.id AND
            board_post.hide = 0
        ORDER BY
            board_post.created_date DESC
    """
    items = await database.fetch_all(query=query)
    return list(map(lambda item: match(['id', 'title', 'username', 'text_html'], item), items))

async def get_post(database, pk):
    query = """
        SELECT
            board_post.id,
            board_post.title,
            auth_user.username,
            board_post.text_html
        FROM
            board_post,
            auth_user
        WHERE
            board_post.author_id = auth_user.id AND
            board_post.id = %s
    """ % str(pk)
    item = await database.fetch_all(query=query)
    return match(['id', 'title', 'username', 'text_html'], item[0])