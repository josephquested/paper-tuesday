#pragma strict

public class Player extends Actor {

	private var input : InputController;

	function Update () {
		ControlAnimator();
	}

	function OnTriggerEnter (collider : Collider) {
		if (collider.tag == "Page") {
			print(collider.gameObject.name + " initiating transition!");
			GameObject.Find("Main Camera").GetComponent(CameraController).MoveToPage(collider.gameObject);
		}
	}
}