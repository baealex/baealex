
// STATE : DONE

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackJoon2
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] a = input.Split(new char[] { ' ' });

            int select;
            int select2;
            string temp;

            for (int i = 0; i < 3; i++)
            {
                select = int.Parse(a[i]);
                for (int j = 0; j < 3; j++)
                {
                    select2 = int.Parse(a[j]);
                    if(select2>select)
                    {
                        temp = a[i];
                        a[i] = a[j];
                        a[j] = temp;
                    }
                }
            }

            Console.WriteLine(int.Parse(a[1]));
        }
    }
}