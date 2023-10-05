package com.example.cafe.support;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class BeansUtils implements ApplicationContextAware {

    private static ApplicationContext appContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        BeansUtils.appContext = applicationContext;
    }

    public static <T> T getBean(Class<T> clazz){
        return BeansUtils.appContext.getBean(clazz);
    }
}
