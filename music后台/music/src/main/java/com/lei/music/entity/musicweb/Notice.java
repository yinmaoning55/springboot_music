package com.lei.music.entity.musicweb;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
public class Notice {

    private Integer id;
    private String content;
    private String date;
}
