#pragma once

#include <iostream>

namespace jin_linked_list
{
	/* Node 구현부 */

	class Node {
		int data;
		Node *link;
	public:
		Node(int value);
		void setLink(Node *link);
		int getData();
		Node *next();
	};

	Node::Node(int value)
	{
		data = value;
		link = nullptr;
	}

	void Node::setLink(Node *link)
	{
		this->link = link;
	}

	int Node::getData()
	{
		return data;
	}

	Node *Node::next()
	{
		return link;
	}

	/* LinkedList 구현부 */

	class LinkedList {
		Node *head;
	public:
		LinkedList();
		void createHead(int value);
		void insertLast(int value);
		void insertFirst(int value);
		void insertMiddle(int number, int value);
		Node *selectElement(int number);
		int deleteElement(int number);
		void printAll();
	};

	LinkedList::LinkedList()
	{
		head = nullptr;
	}

	void LinkedList::createHead(int value)
	{
		head = new Node(value);
		head->setLink(nullptr);
	}

	void LinkedList::insertLast(int value)
	{
		if (head == nullptr)
		{
			createHead(value);
		}
		else
		{
			Node *newNode = new Node(value);
			if (head->next() == nullptr)
			{
				head->setLink(newNode);
			}
			else
			{
				Node *node = head->next();
				while (node->next() != nullptr)
				{
					node = node->next();
				}
				node->setLink(newNode);
			}
		}
	}

	void LinkedList::insertFirst(int value)
	{
		if (head == nullptr)
		{
			createHead(value);
		}
		else
		{
			Node *newNode = new Node(value);
			newNode->setLink(head);
			head = newNode;
		}
	}

	void LinkedList::insertMiddle(int number, int value)
	{
		if (head == nullptr)
		{
			createHead(value);
		}
		else
		{
			Node *newNode = new Node(value);
			Node *node = selectElement(number);
			newNode->setLink(node->next());
			node->setLink(newNode);
		}
	}

	Node *LinkedList::selectElement(int number)
	{
		int count = 0;

		Node *node = head;
		while (node->next() != nullptr)
		{
			count += 1;
			if (count > number)
			{
				break;
			}
			node = node->next();
		}
		return node;
	}

	int LinkedList::deleteElement(int number)
	{
		Node *preNode;
		Node *node;

		if (number == 0)
		{
			node = head;
			head = head->next();
		}
		else
		{
			preNode = selectElement(number - 1);
			node = preNode->next();
			preNode->setLink(node->next());
		}

		int result = node->getData();
		delete node;
		return result;
	}

	void LinkedList::printAll()
	{
		using namespace std;

		Node *node = head;
		while (node->next() != nullptr)
		{
			cout << node->getData() << "->";
			node = node->next();
		}
		cout << node->getData() << "->";
		cout << "nullptr" << endl;
	}
}

/*
LinkedList *mLists = new LinkedList;
mLists->createHead(5);
mLists->insertLast(10);
mLists->insertFirst(55);
mLists->printAll();
std::cout << "0번째 엘리먼트의 값  : " << mLists->selectElement(0)->getData() << std::endl;
std::cout << "1번째 엘리먼트의 값  : " << mLists->selectElement(1)->getData() << std::endl;
std::cout << "10번째 엘리먼트의 값 : " << mLists->selectElement(10)->getData() << std::endl;
mLists->insertLast(15);
mLists->insertLast(20);
mLists->insertMiddle(0, 100);   // insert 100 after index 0
mLists->insertMiddle(1, 500);   // insert 500 after index 1
mLists->insertMiddle(100, 700); // same insertLast(700)
mLists->printAll();
std::cout << "삭제된 3번째 엘리먼트 : " << mLists->deleteElement(3) << std::endl;
std::cout << "삭제된 0번째 엘리먼트 : " << mLists->deleteElement(0) << std::endl;
mLists->printAll();
*/