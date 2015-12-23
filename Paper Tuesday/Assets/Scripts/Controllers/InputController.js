#pragma strict

public class InputController extends MonoBehaviour {

	var horizontal : int;
	var vertical : int;
	private var doubleInput : boolean;

	function Update () {
		ControlMovement();
	}
 
	function GetMouseLocation() {
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		var point : Vector3 = ray.origin + (ray.direction);

		if (Physics.Raycast(ray, hit)) {
			if (hit.collider.gameObject.tag == "NPC") {
				return null;
			}
		}
		
		point.y = 0;   
		return point;
 	}

	function ControlMovement () {
		if (Input.GetKey(KeyCode.Mouse0)) {
			//var mouseLocation : Vector3 = GetMouseLocation();

			if (GetMouseLocation() != null) {
				var mouseLocation : Vector3 = GetMouseLocation();
				gameObject.GetComponent(NavigationAgent).SetGoal(mouseLocation);
				GameObject.Find("Interaction Arrow").GetComponent(InteractionArrow).SetMovementTarget(mouseLocation);
			}
		}
	}

	function ControInteraction () {
		if (Input.GetKey(KeyCode.Mouse0)) {
		}
	}

	function SetInteractionTarget (target : GameObject) {
		print(target.name);
		GameObject.Find("Interaction Arrow").GetComponent(InteractionArrow).SetInteractionTarget(target);
	}	
}