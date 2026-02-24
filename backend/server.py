import asyncio
import json
import websockets

connected_users = {}  # username -> websocket


async def handler(websocket):
    username = None
    try:
        # First message must be username
        username = await websocket.recv()
        connected_users[username] = websocket
        print(f"{username} connected")

        async for message in websocket:
            data = json.loads(message)
            to_user = data["to"]
            msg = data["message"]

            if to_user in connected_users:
                await connected_users[to_user].send(
                    json.dumps({
                        "from": username,
                        "message": msg
                    })
                )
    except websockets.exceptions.ConnectionClosed:
        pass
    finally:
        if username and username in connected_users:
            del connected_users[username]
            print(f"{username} disconnected")


async def main():
    async with websockets.serve(handler, "localhost", 8765):
        print("Server running on ws://localhost:8765")
        await asyncio.Future()  # run forever


asyncio.run(main())
