#include "snake.h"

/*-- Pos 클래스 구현체 --*/

Pos::Pos() {};
Pos::Pos(int x, int y)
	: x(x), y(y) {};

void Pos::setPos(int x, int y)
{
	this->x = x;
	this->y = y;
}
void Pos::setPos(Pos pos)
{
	this->x = pos.getPosX();
	this->y = pos.getPosY();
}
int Pos::getPosX()
{
	return this->x;
}
int Pos::getPosY()
{
	return this->y;
}
bool Pos::operator==(const Pos & other) const
{
	return other.x == this->x && other.y == this->y;
}

/*-- Box 클래스 구현체 --*/

Box::Box() {}
Box::Box(Pos pos) : nowPos(pos) {}

Pos Box::getPos()
{
	return this->nowPos;
}

void Box::setPos(Pos pos)
{
	nowPos.setPos(pos.getPosX(), pos.getPosY());
}

/*-- Snake 클래스 구현체 --*/

Snake::Snake() {}
Snake::Snake(Pos pos) : Box(pos) {}

void Snake::eatApple()
{
	this->numberTail += 1;
}

void Snake::increseTail()
{
	Pos * tempTails = new Pos[this->numberTail - 1];
	for (int i = 0; i < this->numberTail - 1; i++)
	{
		tempTails[i] = posTails[i];
	}

	this->posTails = new Pos[this->numberTail];
	for (int i = 0; i < this->numberTail; i++)
	{
		posTails[i] = tempTails[i];
	}

	delete tempTails;
}

void Snake::insertTail(Pos pos)
{
	for (int i = this->numberTail - 1; i > 0; i--)
	{
		posTails[i] = posTails[i-1];
	}
	posTails[0].setPos(pos);
}

void Snake::moveDir()
{
	moveDir(lastInputDir);
}

Pos Snake::getPosTail(int x)
{
	return *(posTails + x);
}

int Snake::getLastInputDir()
{
	return lastInputDir;
}

int Snake::getNumberTail()
{
	return numberTail;
}

void Snake::moveDir(int dir)
{
	if (this->numberTail > 0)
	{
		this->insertTail(this->nowPos);
	}

	switch (dir)
	{
	case LEFT:
		this->nowPos.setPos(this->nowPos.getPosX() + 0, this->nowPos.getPosY() - 1);
		break;
	case UP:
		this->nowPos.setPos(this->nowPos.getPosX() - 1, this->nowPos.getPosY() + 0);
		break;
	case RIGHT:
		this->nowPos.setPos(this->nowPos.getPosX() + 0, this->nowPos.getPosY() + 1);
		break;
	case DOWN:
		this->nowPos.setPos(this->nowPos.getPosX() + 1, this->nowPos.getPosY() + 0);
		break;
	default:
		break;
	}
	lastInputDir = dir;
}