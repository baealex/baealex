import time
import matplotlib.pyplot as plt

if __name__ == "__main__" :
    c = open('jiyoung.mwf', 'r')
    text_list = c.readlines()
    skip_line = 0
    mlist = []
    sleep = 0.001
    for line in text_list:
        if skip_line < 3:
            skip_line += 1
        else:
            for text in line:
                x = text.encode("hex")
                print(int(x,16))
                if(int(x,16) == int('08',16)):
                    sleep = 1
                # mlist.append(int(x,16))
                time.sleep(sleep)

    plt.plot(mlist)
    plt.show()

    

# hex_value = "asdf".encode("hex")
# print(hex_value)
# print(hex_value.decode("hex"))