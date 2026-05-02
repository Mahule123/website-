window.DB = {
  storageKey: 'electricRepairUsers',

  init() {
    const stored = localStorage.getItem(this.storageKey);
    if (!stored) {
      fetch('db/users.json')
        .then((response) => response.ok ? response.json() : [])
        .then((data) => {
          localStorage.setItem(this.storageKey, JSON.stringify(data || []));
        })
        .catch(() => {
          localStorage.setItem(this.storageKey, JSON.stringify([]));
        });
    }
  },

  getUsers() {
    return JSON.parse(localStorage.getItem(this.storageKey)) || [];
  },

  saveUser(user) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
};

window.DB.init();