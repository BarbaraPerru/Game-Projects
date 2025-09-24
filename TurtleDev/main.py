from turtle  import Turtle, Screen
from time import sleep
from random import randint, choice


# Create global screen
screen = Screen()

# Game over function
def game_over():
    end = Turtle()
    end.penup()
    end.hideturtle()
    end.color("red")
    end.write("GAME OVER\nPress 'R' to restart\nOR\nPress 'E' to exit", align="center", font=("Courier", 24, "bold"))

    screen.listen("R")
    screen.onkey(restart_game, "R")  # Press 'R' to restart

    screen.listen("E")
    screen.onkey(screen.bye, "E")  # Press 'ESC' to exit

# Restart the game
def restart_game():
    screen.clear()# Clear all 
    screen.tracer(0)
    screen.listen()
    run_game() # Restart the game from scratch , Restart logic of the game
def run_game():
    global screen

    # Setup screen
    screen.setup(width=600, height=600)
    screen.bgcolor("#e0f7fa")
    screen.title("SnakeDev Game")
    screen.tracer(0)

    # Snake setup
    position = [(0, 0), (-20, 0), ]
    s = []
    snake_colors = ["#00796b", "#004d40", "#26a69a"]
    for index, pos in enumerate(position):
        segment = Turtle("circle")
        segment.shapesize(stretch_wid=0.8, stretch_len=1.5)
        segment.color(snake_colors[index % len(snake_colors)])
        segment.penup()
        segment.goto(pos)
        s.append(segment)

    # Draw border
    border = Turtle()
    border.hideturtle()
    border.penup()
    border.pensize(4)
    border.color("gray")
    border.goto(-290, 290)
    border.pendown()
    for _ in range(4):
        border.forward(580)
        border.right(90)
    
    # Icons
    language_icons = [
    "images/boot.gif", "images/css.gif", "images/html.gif", "images/java.gif", "images/js.gif", "images/php.gif",
    "images/py.gif", "images/sql.gif", "images/maven.gif", "images/lara.gif", "images/mariadb.gif",
    "images/mysql.gif", "images/spring.gif", "images/tailwind.gif", "images/thyme.gif", "images/github.gif",
    "images/bash.gif", "images/tableplus.gif", "images/postman.gif", "images/vsc.gif"
    ]

    language_icons_names = {
    "images/boot.gif": "Bootstrap",
    "images/css.gif": "CSS3",
    "images/html.gif": "HTML5",
    "images/java.gif": "Java",
    "images/js.gif": "JavaScript",
    "images/php.gif": "PHP",
    "images/py.gif": "Python",
    "images/sql.gif": "SQL",
    "images/maven.gif": "Maven",
    "images/lara.gif": "Laravel",
    "images/mariadb.gif": "MariaDB",
    "images/mysql.gif": "MySQL",
    "images/spring.gif": "Spring",
    "images/tailwind.gif": "TailwindCSS",
    "images/thyme.gif": "Thymeleaf",
    "images/github.gif": "GitHub",
    "images/bash.gif": "Git Bash",
    "images/tableplus.gif": "TablePlus",
    "images/postman.gif": "Postman",
    "images/vsc.gif": "Visual Studio Code"  
    }

    for icon in language_icons:
        screen.addshape(icon)

    unused_icons = language_icons.copy()

    # Food
    food = Turtle()
    food.penup()
    current_food_icon = choice(unused_icons)
    unused_icons.remove(current_food_icon)
    food.shape(current_food_icon)
    food.goto(randint(-280, 280), randint(-280, 280))
    previous_food_icon = current_food_icon

    # Score
    score = Turtle()
    score.penup()
    score.hideturtle()
    score.goto(0, 240)
    score.color("black")
    score.clear()
    language_name = language_icons_names.get(current_food_icon, "Unknown")
    score.write(language_name, align="center", font=("Courier", 20, "bold"))

    # Movement
    def up():
        if s[0].heading() != 270:
            s[0].setheading(90)

    def down():
        if s[0].heading() != 90:
            s[0].setheading(270)

    def left():
        if s[0].heading() != 0:
            s[0].setheading(180)

    def right():
        if s[0].heading() != 180:
            s[0].setheading(0)

    # Keyboard
    screen.listen()
    screen.onkey(up, "Up")
    screen.onkey(down, "Down")
    screen.onkey(left, "Left")
    screen.onkey(right, "Right")

    # Game loop
    start = True
    while start:
        screen.update()
        sleep(0.2)

        # Move snake
        for i in range(len(s) - 1, 0, -1):
            x = s[i - 1].xcor()
            y = s[i - 1].ycor()
            s[i].goto(x, y)
        s[0].forward(20)

        # Eat food
        if s[0].distance(food) < 15:
            new_segment = Turtle()
            new_segment.shape(previous_food_icon)
            new_segment.penup()
            new_segment.goto(s[-1].xcor(), s[-1].ycor())
            s.append(new_segment)

            food.goto(randint(-280, 280), randint(-280, 280))

            if not unused_icons:
                unused_icons = language_icons.copy()

            current_food_icon = choice(unused_icons)
            unused_icons.remove(current_food_icon)
            food.shape(current_food_icon)
            previous_food_icon = current_food_icon

            language_name = language_icons_names.get(current_food_icon, "Unknown")
            score.clear()
            score.write(language_name, align="center", font=("Courier", 20, "bold"))

        # Wall collision
        if (
            s[0].xcor() > 280 or s[0].xcor() < -280 or
            s[0].ycor() > 280 or s[0].ycor() < -280
        ):
            start = False
            game_over()

        # Self collision
        for segment in s[1:]:
            if segment.distance(s[0]) < 10:
                start = False
                game_over()
