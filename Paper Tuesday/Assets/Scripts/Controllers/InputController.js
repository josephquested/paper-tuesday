#pragma strict

public class InputController extends MonoBehaviour {

	var horizontal : int;
	var vertical : int;
	private var doubleInput : boolean;

	function Update () {
		ControlMovement();
	}

	function ControlMovement () {
		if (Input.GetAxisRaw("Horizontal") || Input.GetAxisRaw("Vertical")) {
			if (!doubleInput) {
				ControlDoubleInput();
			}
		}

		if (!doubleInput) {
			horizontal = Input.GetAxisRaw("Horizontal");
			vertical = Input.GetAxisRaw("Vertical");									
		}
	}	

	function ControlDoubleInput () {
		while (Input.GetAxisRaw("Horizontal")) {
			if (Input.GetAxisRaw("Vertical")) {
				while (Input.GetAxisRaw("Horizontal") && Input.GetAxisRaw("Vertical")) {
					horizontal = 0;
					vertical = Input.GetAxisRaw("Vertical");
					doubleInput = true;
					yield;
				}

			doubleInput = false;
			return;
			}

		yield;
		}
	}
}