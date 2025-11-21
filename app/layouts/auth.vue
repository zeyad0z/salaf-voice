<script setup>
import { ref } from "vue";
import LoginDialog from "~/components/auth/loginDialog.vue";
import SignupDialog from "~/components/auth/signupDialog.vue";

const props = defineProps({
  initialMode: { type: String, default: "login" }, // "login" or "signup"
});

const emit = defineEmits(["close"]);

const mode = ref(props.initialMode);

function switchMode(newMode) {
  mode.value = newMode;
}

function closeModal() {
  emit("close");
}
</script>

<template>
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#364D5B]/48 backdrop-blur-xs overflow-y-auto px-4"
    @click.self="closeModal"
  >
    <!-- Modal Container -->
    <div
      class="rounded-[30px] bg-white w-[38.85rem] max-w-[95%] my-8 shadow-xl transition-all duration-300 max-h-[95vh] overflow-y-auto"
    >
      <div class="flex flex-col">
        <!-- Close Button -->
        <div class="ps-5 pt-6 pb-2">
          <VsxIcon
            iconName="CloseSquare"
            :size="32"
            color="#57636F"
            type="linear"
            class="text-start cursor-pointer"
            @click="closeModal"
          />
        </div>

        <!-- Tabs + Content -->
        <div class="flex flex-col items-center gap-7 mt-5">
          <!-- Tabs -->
          <div
            class="bg-[#EFEFEF] rounded-[10px] border border-[#E5E5E5] flex justify-between items-center gap-2 w-[75%] p-2 flex-shrink-0 max-sm:w-[90%]"
          >
            <p
              class="text-center w-1/2 py-4 text-[1.125rem] cursor-pointer transition-colors max-sm:text-[1rem] max-sm:py-3"
              :class="
                mode === 'login'
                  ? 'text-[#ffffff] bg-[#497D74] border border-[#E9E9E9] rounded-[10px]'
                  : 'text-[#848B93]'
              "
              @click="switchMode('login')"
            >
              تسجيل الدخول
            </p>

            <p
              class="text-center w-1/2 py-4 text-[1.125rem] cursor-pointer transition-colors max-sm:text-[1rem] max-sm:py-3"
              :class="
                mode === 'signup'
                  ? 'text-[#ffffff] bg-[#497D74] border border-[#E9E9E9] rounded-[10px]'
                  : 'text-[#848B93]'
              "
              @click="switchMode('signup')"
            >
              انشاء حساب جديد
            </p>
          </div>

          <!-- Dialog content -->
          <div class="w-[80%] pb-10 max-sm:w-[95%] max-sm:pb-6">
            <Transition name="fade" mode="out-in">
              <LoginDialog v-if="mode === 'login'" key="login" />
              <SignupDialog v-else key="signup" />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
