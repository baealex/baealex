import asyncio

async def set_timeout(callback, time):
    await asyncio.sleep(time/1000)
    callback()

async def set_interval(callback, time):
    while True:
        await asyncio.sleep(time/1000)
        callback()

if __name__ == '__main__':
    # python 3.7
    # asyncio.run(set_timeout(lambda: print('hello world'), 1000))

    # python 3.6
    loop = asyncio.get_event_loop()
    loop.run_until_complete(set_timeout(lambda: print('hello world'), 1000))
    loop.close()