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

    // Auto Moving
    /*
    void Update()
    {
        this.cube_red.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime);
        this.cube_blue.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime);
        this.cube_green.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime);
        this.cube_yellow.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime);
    }
    */

    // Keyboard Input
    void Update()
    {
        if (Input.GetKey(KeyCode.LeftArrow)) {
            this.cube_red.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime * (-1));
        }
        
        /* // Just Once
        if (Input.GetKeyDown(KeyCode.LeftArrow)) {
            this.cube_red.transform.Translate(Vector3.right * speed * Time.smoothDeltaTime * (-1));
        }
        */
    }

    // Postion
    /*
    // 더하기 하면 X, Y 모두 조절 가능! 아래는 메뉴얼
    // https://docs.unity3d.com/kr/530/ScriptReference/Vector3.html
    void Update()
    {
        this.cube_red.transform.SetPositionAndRotation(Vector3.right * 5 + Vector3.forward * 5, Quaternion.identity);
    }
    */
}
