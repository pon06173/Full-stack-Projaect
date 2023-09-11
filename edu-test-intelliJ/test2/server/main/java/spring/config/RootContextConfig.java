package spring.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.apache.ibatis.session.ExecutorType;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.type.TypeAliasRegistry;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import java.text.SimpleDateFormat;
import java.util.TimeZone;

@Configuration
public class RootContextConfig {

    /**
     * HikariCP(DBCP) Config(설정 세팅) 객체 Bean 설정
     *
     * @author 하석형
     * @since 2023.08.21
     */
    @Bean(name = "mainHikariConfig")
    public HikariConfig getMainHikariConfig () {
        HikariConfig hikariConfig = new HikariConfig();
        /*MariaDB*/
        hikariConfig.setDriverClassName("org.mariadb.jdbc.Driver");
        hikariConfig.setJdbcUrl("jdbc:mariadb://localhost:3306/test");
        hikariConfig.setUsername("root");
        hikariConfig.setPassword("1234");
        return hikariConfig;
    }

    /**
     * HikariCP(DBCP) 객체 Bean 설정
     *
     * @author 하석형
     * @since 2023.08.21
     */
    @Bean(name = "mainHikariDataSource")
    public HikariDataSource getMainHikariDataSource () {
        HikariDataSource hikariDataSource = new HikariDataSource(getMainHikariConfig());
        return hikariDataSource;
    }

    //Mybatis 동작 설정
    //mybatis-config.xml 작성 대신 Class 활용
    private class Configuration extends org.apache.ibatis.session.Configuration {
        private Configuration() {
            super();
            super.setCacheEnabled(true);//mapper 캐시 전역 사용여부
            super.setLazyLoadingEnabled(false);//mybatis 지연 로딩 사용여부
            super.setMultipleResultSetsEnabled(true);//한개의 구문에서 여러개의 ResultSet 허용 여부
            super.setUseColumnLabel(true);//컬럼명 대신 컬럼라벨 사용 여부
            super.setUseGeneratedKeys(false);//키 자동 생성
            super.setDefaultExecutorType(ExecutorType.SIMPLE);
            super.setDefaultStatementTimeout(25000);
            super.setCallSettersOnNulls(true);//조회 조회시, null값 무조건 허용

            //Mybatis SQL 작성시, 자주 활용하는 Class 별칭 세팅
            TypeAliasRegistry typeAliasRegistry = super.getTypeAliasRegistry();
        }
    }
    //Mybatis 동작 설정 객체 생성
    private Configuration configuration = new Configuration();

    /**
     * Main
     * Mapper : SQL이 작성된 문서와, 작성된 SQL을 실행시킬 class(Mapper)를 매핑 시켜주기 위한 객체 Been 설정 (Main)
     *
     * @author 하석형
     * @since 2023.08.21
     */
    @Bean(name = "mainMapperScannerConfigurer")
    public MapperScannerConfigurer getMainMapperScannerConfigurer () {
        MapperScannerConfigurer mapperScannerConfigurer = null;
        mapperScannerConfigurer = new MapperScannerConfigurer();
        mapperScannerConfigurer.setBasePackage("kr.co.edu");
        mapperScannerConfigurer.setAnnotationClass(org.apache.ibatis.annotations.Mapper.class);//Annotation을 지정해 줘야 service interface 를 Mapper라고 인식하지 않음
        mapperScannerConfigurer.setSqlSessionTemplateBeanName("mainSqlSessionTemplate");
        return mapperScannerConfigurer;
    }

    /**
     * Main
     * Mybatis SqlSessionFactory Bean 설정
     *
     * @author 하석형
     * @since 2023.08.21
     */
    @Bean(name = "mainSqlSessionFactory")
    public SqlSessionFactory getMainSqlSessionFactory (ApplicationContext applicationContext) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(getMainHikariDataSource());
        sqlSessionFactoryBean.setConfiguration(this.configuration);
        sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath:mybatis/main/*-SQL.xml"));
        return sqlSessionFactoryBean.getObject();
    }

    /**
     * Main
     * Mybatis SqlSessionTemplate Bean 설정
     *
     * @author 하석형
     * @since 2023.08.21
     */
    @Bean(name = "mainSqlSessionTemplate")
    public SqlSessionTemplate getMainSqlSessionTemplate (ApplicationContext applicationContext) throws Exception {
        SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(getMainSqlSessionFactory(applicationContext));
        return sqlSessionTemplate;
    }

    /**
     * JSON Parser 라이브러리 Class Bean 설정
     *
     * @author 하석형
     * @since 2023.08.24
     */
    @Bean(name = "objectMapper")
    public ObjectMapper getObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        //기본 날짜 포맷 비활성화
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        //새로운 날짜 포맷 세팅
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        mapper.setDateFormat(dateFormat);
        mapper.setTimeZone(TimeZone.getTimeZone("Asia/Seoul"));
        return mapper;
    }

    /**
     * JSON ViewResolver를 제공해 주기 위한 Bean
     *
     * @author 하석형
     * @since 2023.08.21
     * @return MappingJackson2JsonView
     */
    @Bean(name="jsonView")
    public MappingJackson2JsonView getJsonView () {
        ObjectMapper objectMapper = getObjectMapper();
        MappingJackson2JsonView jsonView = new MappingJackson2JsonView(objectMapper);
        jsonView.setExtractValueFromSingleKeyModel(true);
        return jsonView;
    }
}