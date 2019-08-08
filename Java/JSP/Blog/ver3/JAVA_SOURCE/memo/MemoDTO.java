package memo;

public class MemoDTO {
    private int pk;
    private String title;
    private String content;
    private String wdate;
    private int viewcnt;

    public MemoDTO() {
        super();
    }

    public int getPK() {
        return pk;
    }

    public void setPK(int pk) {
        this.pk = pk;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getWdate() {
        return wdate;
    }

    public void setWdate(String wdate) {
        this.wdate = wdate;
    }

    public int getViewcnt() {
        return viewcnt;
    }

    public void setViewcnt(int viewcnt) {
        this.viewcnt = viewcnt;
    }
}