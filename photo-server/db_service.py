import sqlite3


class InitializeDB:

    def __init__(self):
        con = sqlite3.connect('database.db', check_same_thread=False)
        cur = con.cursor()
        try:
            cur.execute('SELECT * FROM comments LIMIT 1')
        except:
            print("Database  doesn't exist, creating a new one...")
            cur.execute("""
                CREATE TABLE comments (
                    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                    image TEXT,
                    author TEXT NOT NULL,
                    rating INTEGER,
                    comment TEXT
                );
            """)

        try:
            cur.execute('SELECT * FROM photos LIMIT 1')
        except:
            print("Database  doesn't exist, creating a new one...")
            cur.execute("""
                CREATE TABLE photos (
                    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                    image TEXT,
                    description TEXT NOT NULL,
                    theme TEXT NOT NULL
                );
            """)
        try:
            cur.execute('SELECT * FROM orders LIMIT 1')
        except:
            print("Database  doesn't exist, creating a new one...")
            cur.execute("""
                CREATE TABLE orders (
                    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    lastname TEXT,
                    email TEXT NOT NULL,
                    link TEXT,
                    theme TEXT,
                    duration TEXT,
                    date TEXT,
                    time TEXT,
                    location TEXT,
                    image TEXT,
                    reference TEXT,
                    referencetwo TEXT,
                    referencethree TEXT
                );
            """)

        print(list(cur.execute(f"SELECT * FROM comments")))

        self.session = cur
        self.connection = con
        self.comment_fields = ['id', 'image', 'author', 'rating', 'comment']
        self.photo_fields = ['id', 'image', 'description', 'theme']
        self.order_fields = ['id', 'name', 'lastname', 'email', 'link', 'theme',
                             'duration', 'date', 'time', 'location', 'image', 'reference','referencetwo', 'referencethree']


    def insert_new_comment(self, image, author, rating, comment, comment_id=None):
        self.session.execute(f"INSERT INTO comments VALUES (?,?,?,?,?)", (comment_id, image, author, rating, comment))
        self.connection.commit()

    def find_comment_by_id(self, id):
        return list(self.session.execute(f"SELECT * FROM comments WHERE id = {id}"))

    #
    def delete_photo(self, id):
        self.session.execute(f"DELETE FROM photos WHERE id = {id}")


    def find_all_comments(self):
        data = list(self.session.execute(f"SELECT * FROM comments"))
        comments = [dict(zip(self.comment_fields, row)) for row in data]
        return comments



    def insert_new_photo(self, image, description, theme, photo_id=None):
        self.session.execute(f"INSERT INTO photos VALUES (?,?,?,?)", (photo_id, image, description, theme))
        self.connection.commit()



    def find_all_photos(self):
        data = list(self.session.execute(f"SELECT * FROM photos"))
        photos = [dict(zip(self.photo_fields, row)) for row in data]
        return photos


    def insert_new_order(self, name, lastname, email,link,theme,duration,date,time,location,image,
                         reference, referencetwo, referencethree, order_id=None):
        self.session.execute(f"INSERT INTO orders VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (order_id, name, lastname, email,
                                                                                    link, theme, duration, date, time, location,
                                                                                    image, reference, referencetwo, referencethree))
        self.connection.commit()


    def find_all_orders(self):
        data = list(self.session.execute(f"SELECT * FROM orders"))
        orders = [dict(zip(self.order_fields, row)) for row in data]
        return orders
