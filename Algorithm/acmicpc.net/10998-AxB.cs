
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
            string[] a = input.Split(new char[] {' '});
            Console.WriteLine(int.Parse(a[0]) * int.Parse(a[1]));
        }
    }
}