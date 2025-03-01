package com.wayn.mobile.framework.security.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.wayn.common.core.domain.shop.Member;
import com.wayn.common.core.service.shop.IMemberService;
import com.wayn.common.enums.UserStatusEnum;
import com.wayn.common.util.ip.IpUtils;
import com.wayn.common.config.ThreadPoolConfig;
import com.wayn.mobile.framework.manager.thread.AsyncManager;
import com.wayn.mobile.framework.security.LoginUserDetail;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.TimerTask;

@Slf4j
@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private IMemberService iMemberService;

    private ThreadPoolConfig threadPoolConfig;

    @Override
    public UserDetails loadUserByUsername(String mobile) throws UsernameNotFoundException {
        Member member = iMemberService.getOne(new QueryWrapper<Member>().eq("mobile", mobile));
        if (member == null) {
            log.info("登录用户：{} 不存在.", mobile);
            throw new UsernameNotFoundException("登录用户：" + mobile + " 不存在");
        }
        if (UserStatusEnum.DISABLE.getCode().equals(member.getStatus())) {
            log.info("登录用户：{} 已经被停用.", mobile);
            throw new DisabledException("登录用户：" + mobile + " 不存在");
        }
        // 记录最后一次登陆时间以及登陆IP
        AsyncManager.me().execute(new TimerTask() {
            @Override
            public void run() {
                iMemberService.update()
                        .set("last_login_time", LocalDateTime.now())
                        .set("last_login_ip", IpUtils.getHostIp())
                        .eq("id", member.getId())
                        .update();
            }
        });
        return new LoginUserDetail(member, Collections.emptySet());
    }

}
