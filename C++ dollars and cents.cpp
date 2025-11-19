#include <iostream>
#include <iomanip>
#include <cmath> // Required for abs with floating-point values
using namespace std;

int main()
{
    double usdollar_amt;

    // "NOTE: If you want to enter a US dollar amount, use a whole number of 1 or greater.\n"
// "To enter cents, please use a decimal value.\n\n";

    cout << "Enter US dollar amount: ";
    cin >> usdollar_amt;

    cout << fixed << setprecision(2);

    if (usdollar_amt == 0.0)
        cout << "$" << usdollar_amt << endl;
    else if (fabs(usdollar_amt) <= 0.99)
        cout << usdollar_amt << "¢" << endl;
    else
        cout << "$" << usdollar_amt << endl;

    return 0;
}