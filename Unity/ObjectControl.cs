using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Controller : MonoBehaviour
{

    int speed = 5;

    GameObject cube_red;
    GameObject cube_blue;
    GameObject cube_green;
    GameObject cube_yellow;

    void Start()
    {
        this.cube_red = GameObject.Find("Cube_Red");
        this.cube_blue = GameObject.Find("Cube_Blue");
        this.cube_green = GameObject.Find("Cube_Green");
        this.cube_yellow = GameObject.Find("Cube_Yellow");
    }

    void Update()
    {
        this.cube_red.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime);
        this.cube_blue.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime);
        this.cube_green.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime);
        this.cube_yellow.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime);
    }
}
