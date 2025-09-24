from turtle  import Turtle, Screen


# Create global screen
screen = Screen()
def run_game():
    global screen

    # Setup screen
    screen.setup(width=600, height=600)
    screen.bgcolor("#e0f7fa")
    screen.title("SnakeDev Game")
    screen.tracer(0)