#pragma once
#include <stdlib.h>
#include <conio.h>

enum MOVE_DIRECTION
{
	LEFT,
	UP,
	RIGHT,
	DOWN
};

class Pos
{
	int x;
	int y;
public:
	Pos();
	Pos(int x, int y);
	void setPos(int x, int y);
	void setPos(Pos pos);
	int getPosX();
	int getPosY();
	bool operator==(const Pos & other) const;
};

class Box
{
protected:
	Pos nowPos;
public:
	Box();
	Box(Pos pos);
	Pos getPos();
	void setPos(Pos pos);
};

class Snake : public Box
{
	int numberTail = 0;
	int lastInputDir = UP;
	Pos * posTails;
public:
	Snake();
	Snake(Pos pos);
	void eatApple();
	void increseTail();
	void insertTail(Pos pos);
	void moveDir();
	void moveDir(int dir);
	Pos getPosTail(int x);
	int getLastInputDir();
	int getNumberTail();
};