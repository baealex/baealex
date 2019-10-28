#include "snake_game.h"
using namespace std;

SnakeGame::SnakeGame()
{
	snake = new Snake(Pos(MAP_HEIGHT / 2, MAP_WIDTH / 2));
	apple = new Box(Pos(rand()%20, rand()%20));
	isGameOver = false;
}

void SnakeGame::handlerKey()
{
	if (_kbhit())
	{
		switch (_getch())
		{
		case 'a':
		case 'A':
			if(snake->getLastInputDir() != RIGHT)
				snake->moveDir(LEFT);
			break;
		case 'w':
		case 'W':
			if (snake->getLastInputDir() != DOWN)
				snake->moveDir(UP);
			break;
		case 'd':
		case 'D':
			if (snake->getLastInputDir() != LEFT)
				snake->moveDir(RIGHT);
			break;
		case 's':
		case 'S':
			if (snake->getLastInputDir() != UP)
				snake->moveDir(DOWN);
			break;
		default:
			break;
		}
	}
	else
	{
		snake->moveDir();
	}
}

void SnakeGame::update()
{
	if (this->snake->getPos().getPosX() < 0 ||
		this->snake->getPos().getPosX() > MAP_WIDTH ||
		this->snake->getPos().getPosY() < 0 ||
		this->snake->getPos().getPosY() > MAP_HEIGHT
	) {
		isGameOver = true;
	}

	for (int i = 0; i < snake->getNumberTail(); i++)
	{
		if (this->snake->getPos() == snake->getPosTail(i))
		{
			isGameOver = true;
			break;
		}
	}

	if (this->snake->getPos() == this->apple->getPos())
	{
		this->snake->eatApple();
		this->snake->increseTail();

		this->apple->setPos(Pos(rand() % 20, rand() % 20));
	}
}

void SnakeGame::start()
{
	while (!isGameOver)
	{
		handlerKey();
		update();
		render();
		_sleep(DELAY);
	}
}

void SnakeGame::render()
{
	system("cls");
	for (int x = -1; x < MAP_WIDTH + 2; x++)
	{
		for (int y = -1; y < MAP_HEIGHT + 2; y++)
		{
			/* ¸Ê ¾Æ¿ô¶óÀÎ ±×¸®±â */
			if (x == -1) { cout << "¡Ý"; continue; }
			if (y == -1) { cout << "¡Ý"; continue; }
			if (x == MAP_WIDTH + 1) { cout << "¡Ý"; continue; }
			if (y == MAP_WIDTH + 1) { cout << "¡Ý"; continue; }
			/* ¸Ê ¾Æ¿ô¶óÀÎ ±×¸®±â ³¡ */

			bool isSnake = false;

			if (Pos(x, y) == this->snake->getPos())
			{
				isSnake = true;
			}
			else
			{
				for (int i = 0; i < snake->getNumberTail(); i++)
				{
					if (Pos(x, y) == snake->getPosTail(i))
					{
						isSnake = true;
						break;
					}
				}
			}

			if (isSnake)
			{
				cout << "¡á";
			}
			else if (Pos(x, y) == this->apple->getPos())
			{
				cout << "¡à";
			}
			else
			{
				cout << "¡¡";
			}
		}
		cout << endl;
	}
}