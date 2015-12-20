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
		var point : Vector3 = ray.origin + (ray.direction);
		point.y = 0;   
		return point;
 	}

	function ControlMovement () {
		if (Input.GetKey(KeyCode.Mouse0)) {
			var mouseLocation : Vector3 = GetMouseLocation();
			gameObject.GetComponent(NavigationAgent).SetGoal(mouseLocation);
		}
	}	
}