import asyncio
import aiohttp
import aiofiles

class async_requests:
    async def get(url):
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as res:
                return {
                    'text': await res.text(),
                    'status_code': res.status,
                    'headers': res.raw_headers
                }

    async def post(url, data=None, json=None):
        async with aiohttp.ClientSession() as session:
            async with session.post(url, data=data, json=json) as res:
                return {
                    'text': await res.text(),
                    'status_code': res.status,
                    'headers': res.raw_headers
                }

async def main():
    res = await async_requests.get('https://blex.me')
    # res = await async_requests.post('https://blex.me', data={'say': 'hello'})
    print(res['text'])

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
    loop.close()