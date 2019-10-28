#pragma once
#include <iostream>
#include "snake.h"
#include "config.h"

class SnakeGame
{
	Snake * snake;
	Box * apple;
	bool isGameOver;
	const int MAP_WIDTH = MAP_SIZE;
	const int MAP_HEIGHT = MAP_SIZE;
public:
	SnakeGame();
	void update();
	void render();
	void start();
	void handlerKey();
};