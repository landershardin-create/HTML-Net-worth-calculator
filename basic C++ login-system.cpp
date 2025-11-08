#include <iostream>
#include <string>

using namespace std;

int main() {
    string username, password;
    const string validUsername = "admin";
    const string validPassword = "password123";

    cout << "=== Login System ===" << endl;

    cout << "Enter username: ";
    cin >> username;

    cout << "Enter password: ";
    cin >> password;

    if (username == validUsername && password == validPassword) {
        cout << "Login successful. Welcome, " << username << "!" << endl;
    } else {
        cout << "Login failed. Invalid credentials." << endl;
    }

    return 0;
}
