package com.lei.music.entity.musictop;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
public class Top {
    private Integer id;
    private String songName;
    private String singerName;
}
