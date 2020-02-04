
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
            int testcase = int.Parse(Console.ReadLine());
            int[] sum = new int[testcase];
            for (int i = 0;i<testcase;i++)
            {
                string input = Console.ReadLine();
                string[] a = input.Split(new char[] { ' '});
                sum[i] = int.Parse(a[0]) + int.Parse(a[1]);
            }
            for (int i = 0; i < testcase; i++)
            {
                Console.WriteLine(sum[i]);
            }
        }
    }
}