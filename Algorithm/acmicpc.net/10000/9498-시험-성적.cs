
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
            int a = int.Parse(input);

            if(90<=a)
            {
                Console.WriteLine("A");
            }
            else if (80 <= a)
            {
                Console.WriteLine("B");
            }
            else if (70 <= a)
            {
                Console.WriteLine("C");
            }
            else if (60 <= a)
            {
                Console.WriteLine("D");
            }
            else
            {
                Console.WriteLine("F");
            }
        }
    }
}