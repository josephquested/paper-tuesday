#pragma strict

public class CameraController extends MonoBehaviour {

	var screenTransitionSpeed : float;

	function MoveToPage(page : GameObject) {
		var goalVector : Vector3 = page.transform.localPosition;
		var minimumZ : float = goalVector.z - 0.1;
		var maximumZ : float = goalVector.z + 0.1;
		var minimumX : float = goalVector.x - 0.1;
		var maximumX : float = goalVector.x + 0.1;
		
		goalVector.y = 10;

		while (transform.localPosition != goalVector) {
			var z : float = transform.localPosition.z;
			var x : float = transform.localPosition.x;

			if (z > maximumZ) {
				transform.localPosition.z -= screenTransitionSpeed;
				}

			if (x > maximumX) {
				transform.localPosition.x -= screenTransitionSpeed;
				}

			if (z < minimumZ) {
				transform.localPosition.z += screenTransitionSpeed;
				}

			if (x < minimumX) {
				transform.localPosition.x += screenTransitionSpeed;
				}

			if (z >= minimumZ && z <= maximumZ && x >= minimumX && x <= maximumX) {
				transform.localPosition = goalVector;
			}

		yield;
		}
	}
}