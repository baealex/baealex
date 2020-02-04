import random
import time

class Card:
    kinds = ['♥' ,'♠', '♣', '◆']
    number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J']

class CardPack:
    card_list = []

    def __init__(self):
        for i in range(len(Card.kinds)):
            for j in range(len(Card.number)):
                self.card_list += [[Card.kinds[i], Card.number[j]]]
        

class Person:
    name = 'User'
    money = 0
    card_list = []

    def __init__(self):
        pass

    def show_card(self):
        return str(self.card_list)

    def get_card(self, card):
        self.card_list.append(card)

    def total_number(self):
        total = 0
        for card in self.card_list:
            if card[1] == 'K' or card[1] == 'Q' or card[1] == 'J':
                total += 10
            else:
                total += int(card[1])
        return total

    def black_jack(self):
        if self.total_number() == 21:
            return True
        return False

    def bust(self):
        if self.total_number() > 21:
            return True
        return False

class Player(Person):
    def __init__(self, name, money):
        self.name = name
        self.money = money
        self.card_list = []

    def hit(self):
        pass

    def stay(self):
        pass

    def surrender(self):
        pass

class Dealer(Person):
    card_pack = CardPack()

    def __init__(self, name, money):
        self.name = name
        self.money = money
        self.card_list = []
    
    def card_suffle(self):
        random.shuffle(self.card_pack.card_list)

    def hand_card(self, player):
        player.get_card(self.card_pack.card_list[0])
        del self.card_pack.card_list[0]

    def over_seven_teen(self):
        if self.total_number() >= 17:
            return True
        return False

class BlackJack:
    dealer = Dealer('Dealer', 0)
    player = Player('Player1', 0)

    def init(self):
        self.dealer.card_suffle()
        # Player에게 카드를 나눠 줌
        for i in range(2):
            self.dealer.hand_card(self.player)

        print('플레이어가 받은 카드는 \''+ str(self.player.card_list) +'\'입니다.')

        # Dealer가 카드를 가져감
        for i in range(2):
            self.dealer.hand_card(self.dealer)

    def loop(self):
        pass

    def start(self):
        self.init()

        if self.dealer.black_jack():
            print('딜러는 BlackJack 입니다.')
            if not self.player.total_number == 21:
                self.player.money = 0

        if self.player.black_jack():
            print('플레이어는 BlackJack 입니다.')
            if not self.player.total_number == 21:
                self.player.money *= 2

        if self.dealer.bust():
            print('딜러는 Bust 입니다.')
            return
        
        if self.player.bust():
            print('플레이어는 Bust 입니다.')
            self.player.money = 0
            return

        print('딜러가 공개한 카드는 \''+ str(self.dealer.card_list[1]) +'\'입니다.')

        while True:
            time.sleep(0.5)
            if self.dealer.bust():
                print('딜러는 Bust 입니다.')
                return
            if self.player.bust():
                print('플레이어는 Bust 입니다.')
                self.player.money = 0
                return

            if self.dealer.over_seven_teen():
                print('딜러의 카드가 17 이상이 되었습니다.')
                break
            
            while(True):
                user_check = int(input('1. HIT, 2. STAY, 3. SURRENDER : '))

                if(user_check == 1):
                    self.dealer.hand_card(self.player)
                    break
                elif(user_check == 2):
                    break
                elif(user_check == 3):
                    break
                else:
                    print('1-3 사이를 입력하세요.')
                    continue

            print('플레이어 카드 : '+ str(self.player.show_card()))
            self.dealer.hand_card(self.dealer)
            print('딜러의 카드 : ? '+ str(self.dealer.card_list[1:]))

        print('플레이어 카드 : '+ str(self.player.show_card()))
        print('딜러의 카드   : '+ str(self.dealer.show_card()))
        if self.player.total_number() > self.dealer.total_number():
            print('플레이어가 이겼습니다.')
            self.player.money *= 2
        elif self.player.total_number() < self.dealer.total_number():
            print('플레이어가 졌습니다.')
            self.player.money = 0
        else:
            print('비겼습니다.')

if __name__=='__main__':
    black_jack_game = BlackJack()
    black_jack_game.start()